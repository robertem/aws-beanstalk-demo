package pe.robertem.example.crewapi.crew;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CrewRepository extends JpaRepository<Crew, String> {
}

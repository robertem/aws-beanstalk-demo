package pe.robertem.example.crewapi.crew;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrewService {

    private CrewRepository crewRepository;

    public CrewService(CrewRepository crewRepository) {
        this.crewRepository = crewRepository;
    }

    public List<Crew> findAll() {
        return crewRepository.findAll();
    }

    public Crew findById(String id) {
        return crewRepository.findById(id).orElseThrow(() -> new RuntimeException("Crew not found"));
    }

    public Crew create(final Crew crew) {
        if (crewRepository.existsById(crew.getId())) {
            throw new RuntimeException("There already exists a crew with the same id");
        }
        return crewRepository.save(crew);
    }

    public Crew update(final Crew crew) {
        if (!crewRepository.existsById(crew.getId())) {
            throw new RuntimeException("Crew not found");
        }
        return crewRepository.save(crew);
    }

    public void delete(String id) {
        if (!crewRepository.existsById(id)) {
            throw new RuntimeException("Crew not found");
        }
        crewRepository.deleteById(id);
    }
}

package pe.robertem.example.crewapi.crew;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Crew {

    @Id
    private String id;
    private String name;
    private String description;

}

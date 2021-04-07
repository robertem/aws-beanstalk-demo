package pe.robertem.example.crewapi.member;

import lombok.Getter;
import lombok.Setter;
import pe.robertem.example.crewapi.crew.Crew;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Getter
@Setter
@Entity
public class Member {

    @Id
    private String id;
    private String name;
    private String role;
    @ManyToOne
    private Crew crew;

}

package pe.robertem.example.crewapi.crew;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/crews")
public class CrewController {

    private CrewService crewService;

    public CrewController(CrewService crewService) {
        this.crewService = crewService;
    }

    @GetMapping
    public List<Crew> findAll() {
        return crewService.findAll();
    }

    @GetMapping("/{id}")
    public Crew findById(@PathVariable String id) {
        return crewService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Crew create(@RequestBody Crew crew) {
        return crewService.create(crew);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable String id, @RequestBody Crew crew) {
        crew.setId(id);
        crewService.update(crew);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        crewService.delete(id);
    }
}

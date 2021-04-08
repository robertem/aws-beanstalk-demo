package pe.robertem.example.crewapi;

import org.springframework.hateoas.RepresentationModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.robertem.example.crewapi.crew.CrewController;
import pe.robertem.example.crewapi.member.MemberController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/")
public class BaseController {

    @GetMapping
    public RepresentationModel root() {
        RepresentationModel rootResource = new RepresentationModel();

        rootResource.add(
                linkTo(methodOn(BaseController.class).root()).withSelfRel(),
                linkTo(methodOn(CrewController.class).findAll()).withRel("crews"),
                linkTo(methodOn(MemberController.class).findAll()).withRel("members")
        );

        return rootResource;
    }

}

package pe.robertem.example.crewapi.member;

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
@RequestMapping("/members")
public class MemberController {

    private MemberService memberService;

    public MemberController(MemberService crewService) {
        this.memberService = crewService;
    }

    @GetMapping
    public List<Member> findAll() {
        return memberService.findAll();
    }

    @GetMapping("/{id}")
    public Member findById(@PathVariable String id) {
        return memberService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Member create(@RequestBody Member member) {
        return memberService.create(member);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable String id, @RequestBody Member member) {
        member.setId(id);
        memberService.update(member);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        memberService.delete(id);
    }

}

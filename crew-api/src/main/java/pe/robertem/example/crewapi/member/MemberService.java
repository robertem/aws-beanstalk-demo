package pe.robertem.example.crewapi.member;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MemberService {

    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    public Member findById(String id) {
        return memberRepository.findById(id).orElseThrow(() -> new RuntimeException("Member not found"));
    }

    public Member create(final Member member) {
        if (memberRepository.existsById(member.getId())) {
            throw new RuntimeException("There already exists a member with the same id");
        }
        return memberRepository.save(member);
    }

    public Member update(final Member member) {
        if (!memberRepository.existsById(member.getId())) {
            throw new RuntimeException("Member not found");
        }
        return memberRepository.save(member);
    }

    public void delete(String id) {
        if (!memberRepository.existsById(id)) {
            throw new RuntimeException("Member not found");
        }
        memberRepository.deleteById(id);
    }

}

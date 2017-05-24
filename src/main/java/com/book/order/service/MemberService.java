package com.book.order.service;

import com.book.order.domain.Member;
import com.book.order.model.dto.MemberDetails;
import com.book.order.repository.MemberRepository;
import org.jtransfo.JTransfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService extends JTransfoService {
    
    private final MemberRepository memberRepository;
    
    @Autowired
    public MemberService(JTransfo jTransfo, MemberRepository memberRepository) {
        super(jTransfo);
        this.memberRepository = memberRepository;
    }
    
    public MemberDetails findOne(Long id) {
        Member member = memberRepository.findOne(id);
        return jTransfo.convertTo(member, MemberDetails.class);
    }
    
    public MemberDetails save(MemberDetails memberDetails) {
        Member member = jTransfo.convertTo(memberDetails, Member.class);
        member = memberRepository.save(member);
        return jTransfo.convertTo(member, MemberDetails.class);
    }
    
    public MemberDetails findByUsername(String username) {
        Member member = memberRepository.findOneByUsername(username);
        return jTransfo.convertTo(member, MemberDetails.class);
    }
    
}

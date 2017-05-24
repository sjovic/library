package com.book.order.controller;

import javax.validation.Valid;

import com.book.order.model.dto.MemberDetails;
import com.book.order.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {
    
    @Autowired
    private final MemberService memberService;
    
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public MemberDetails getOne(@PathVariable Long id) {
        return memberService.findOne(id);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public MemberDetails save(@RequestBody @Valid MemberDetails memberDetails) {
        return memberService.save(memberDetails);
    }
    
}

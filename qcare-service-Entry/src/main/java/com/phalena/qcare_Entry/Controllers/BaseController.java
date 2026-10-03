
package com.phalena.qcare_Entry.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/v1")
public class BaseController {

    @GetMapping({"", "/", "/base"})
    public String baseView() {
        return "base";
    }
}
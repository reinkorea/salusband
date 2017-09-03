package com.salusband.artbake.cucumber.stepdefs;

import com.salusband.artbake.ArtbakeApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = ArtbakeApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

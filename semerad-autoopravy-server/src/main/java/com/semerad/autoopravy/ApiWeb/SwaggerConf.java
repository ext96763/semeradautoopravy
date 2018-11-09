package com.semerad.autoopravy.ApiWeb;


import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


/**
 * Configuration class for Swagger documentation. Api version, info about api and all different possibilities for api
 * are configured here.
 */


@EnableSwagger2
@Configuration
public class SwaggerConf {

    private final String GROUP_NAME = "MainController";


    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName(GROUP_NAME)
                .apiInfo(apiInfo())
                .useDefaultResponseMessages(false)
                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.autoopravy.manazer.controller.ManagerController"))
                .paths(PathSelectors.any())
//                .paths(Predicates.not(PathSelectors.regex("/error.*")))
                .paths(Predicates.not(PathSelectors.regex("/actuator.*")))
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("ZM API")
                .description("Simple API")
                .termsOfServiceUrl("http://www-03.ibm.com/software/sla/sladb.nsf/sla/bm?Open")
                .license("Apache License Version 2.0")
                .licenseUrl("https://github.com/IBM-Bluemix/news-aggregator/blob/master/LICENSE")
                .version("1.0")
                .build();
    }
}

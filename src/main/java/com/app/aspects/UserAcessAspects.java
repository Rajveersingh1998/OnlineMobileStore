package com.app.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class UserAcessAspects {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	@Before("execution(* com.app.service.*.*(..))")
	public void before(JoinPoint joinPoint){
		//Advice
		log.info(" Check for user access ");
		log.info(" Allowed execution for {}", joinPoint);
	}//joinpoint is an i/f which will give you the complete details of the method that it is 
	//intercepting
}

package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Users;

@SpringBootTest
public class UserDaoLayerTest {

	@Autowired
	private UserRepository userRepo;
	
	@Test
	void testAuthenticateUser() {
		Optional<Users> user = userRepo.authenticateUser("kanad123@gmail.com", "kanu123");
		assertEquals("9770022111", user.get().getMobileNo());
	}
	
	@Test
	void testFindByEmail() {
		Optional<Users> user = userRepo.findByEmail("virpekanad@gmail.com");
		assertEquals("ItsKanad", user.get().getFirstName());
	}
	
	
}

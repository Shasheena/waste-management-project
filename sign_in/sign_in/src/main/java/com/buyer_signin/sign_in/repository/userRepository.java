package com.buyer_signin.sign_in.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.buyer_signin.sign_in.model.User;
import java.util.Optional;




public interface userRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}


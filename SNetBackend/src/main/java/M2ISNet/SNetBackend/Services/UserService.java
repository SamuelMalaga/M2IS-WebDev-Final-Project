package M2ISNet.SNetBackend.Services;

import M2ISNet.SNetBackend.Models.Group;
import M2ISNet.SNetBackend.Models.Post;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public User createUser(
            String _userName,
            String _userEmail,
            Date _userBirthDate,
            String _userPassword
    ){
        User createdUser = new User();
        createdUser.setUserName(_userName);
        createdUser.setUserEmail(_userEmail);
        createdUser.setUserBirthDate(_userBirthDate);
        createdUser.setUserPassword(_userPassword);

        createdUser = userRepository.save(createdUser);

        return createdUser;
    }

    public Set<User> getUserFriends(
            Long userId
    ){
        Optional<User> foundUser = userRepository.findById(userId);
        return foundUser.get().getUserFriends();
    }

    public List<Post> getUserPosts(
            Long userId
    ){
        return userRepository.getAllUserPostOrderedByPostDate(userId);
    }

    public List<Group> getUserGroups(
            Long userId
    ){
        return userRepository.getAllUserGroupsOrderedByGroupCreationDate(userId);
    }

    public Optional<User> findUserByEmail(String userEmail){
        return userRepository.findUserByUserEmail(userEmail);
    }

}

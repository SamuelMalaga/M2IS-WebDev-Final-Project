package M2ISNet.SNetBackend.Services;

import M2ISNet.SNetBackend.Models.Group;
import M2ISNet.SNetBackend.Models.Post;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.Models.UserChat;
import M2ISNet.SNetBackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

//    Get all the posts for the user feed (his posts + friends post)
    public List<Post> getUserFeed(
            Long userId
    ){
        Set<User> userFriends = getUserFriends(userId);
        List<Post> userFeedPosts = new ArrayList<>();

        //TODO: Sort it by date
        for(User friend : userFriends ){
            userFeedPosts.addAll(getUserPosts(friend.getUserId()));
        }
        return userFeedPosts;
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

    public List<UserChat> getUserChat(
            Long userId
    ){
        return userRepository.getAllUserChatsOrderedByChatCreationDate(userId);
    }

}

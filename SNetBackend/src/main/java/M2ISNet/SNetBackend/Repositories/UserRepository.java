package M2ISNet.SNetBackend.Repositories;

import M2ISNet.SNetBackend.Models.Group;
import M2ISNet.SNetBackend.Models.Post;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.Models.UserChat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {


    @Query("SELECT p FROM Post p WHERE p.postAuthor = :userId ORDER BY p.postDate desc ")
    public List<Post> getAllUserPostOrderedByPostDate(@Param("userId") Long userId);


    @Query(
            value = "SELECT gm FROM group_members gm WHERE gm.user_id = :userId JOIN groups gp ON gp.group_id = gm.group_id ORDER BY gp.group_creation_date DESC",
            nativeQuery = true
    )
    public List<Group> getAllUserGroupsOrderedByGroupCreationDate(@Param("userId") Long userId);

    @Query(
            value = "SELECT uc FROM user_chats uc WHERE uc.user_id = :userId JOIN groups gp ON gp.group_id = gm.group_id ORDER BY gp.group_creation_date DESC",
            nativeQuery = true
    )
    public List<UserChat> getAllUserChatsOrderedByChatCreationDate(@Param("userId") Long userId);

    Optional<User> findUserByUserEmail(String userEmail);
}

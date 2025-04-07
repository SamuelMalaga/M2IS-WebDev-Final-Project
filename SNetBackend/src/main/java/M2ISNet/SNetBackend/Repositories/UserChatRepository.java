package M2ISNet.SNetBackend.Repositories;

import M2ISNet.SNetBackend.Models.UserChat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserChatRepository extends JpaRepository<UserChat,Long> {
}

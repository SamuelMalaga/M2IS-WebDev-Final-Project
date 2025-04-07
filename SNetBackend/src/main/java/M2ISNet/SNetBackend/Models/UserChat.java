package M2ISNet.SNetBackend.Models;

import M2ISNet.SNetBackend.Models.Embeddables.UserChatKey;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "user_chats")
public class UserChat {

    @EmbeddedId
    private UserChatKey userChatId;

    @ManyToOne
    @MapsId("sender")
    @JoinColumn(name = "sender_id")
    private User sender;

    @ManyToOne
    @MapsId("reciever")
    @JoinColumn(name = "reciever_id")
    private User reciever;

    @Column(nullable = false)
    private String messageContent;

    @CreationTimestamp
    private Date messageSendDate;


}

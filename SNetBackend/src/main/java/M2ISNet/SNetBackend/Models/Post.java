package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;
import org.springframework.lang.Nullable;

import java.util.Date;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @Column(nullable = false)
    private Date postDate;

    @Column(nullable = false)
    private String postContent;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = true, updatable = false)
    private User postAuthor;

    @ManyToOne
    @JoinColumn(name = "groupId", insertable = true, updatable = false)
    private Group postGroup;
}

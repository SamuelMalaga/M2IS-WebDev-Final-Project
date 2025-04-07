package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.lang.Nullable;

import java.util.Date;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @CreationTimestamp
    private Date postDate;

    @Column(nullable = false)
    private String postContent;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = true, updatable = false)
    private User postAuthor;

    @ManyToOne
    @JoinColumn(name = "groupId", insertable = true, updatable = false)
    private Group postGroup;

    public User getPostAuthor() {
        return postAuthor;
    }

    public void setPostAuthor(User postAuthor) {
        this.postAuthor = postAuthor;
    }

    public Group getPostGroup() {
        return postGroup;
    }

    public void setPostGroup(Group postGroup) {
        this.postGroup = postGroup;
    }

    public Long getPostId() {
        return postId;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }
}

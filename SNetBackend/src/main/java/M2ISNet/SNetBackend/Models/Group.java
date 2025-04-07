package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "groups")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    @Column
    private String groupName;

    @Column
    @CreationTimestamp
    private Date groupCreationDate;

    @Column
    private Long groupCreatorId;

    @ManyToMany
    @JoinTable(
            name = "group_members",
            joinColumns = @JoinColumn(name = "groupId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> groupMembers = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "group_admins",
            joinColumns = @JoinColumn(name = "groupId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> groupAdmins = new HashSet<>();

    @OneToMany
    @JoinColumn(name = "groupId")
    private Set<Post> groupPosts = new HashSet<>();;

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Date getGroupCreationDate() {
        return groupCreationDate;
    }

    public void setGroupCreationDate(Date groupCreationDate) {
        this.groupCreationDate = groupCreationDate;
    }

    public Long getGroupCreatorId() {
        return groupCreatorId;
    }

    public void setGroupCreatorId(Long groupCreatorId) {
        this.groupCreatorId = groupCreatorId;
    }

    public Set<User> getGroupMembers() {
        return groupMembers;
    }

    public void setGroupMembers(Set<User> groupMembers) {
        this.groupMembers = groupMembers;
    }

    public Set<User> getGroupAdmins() {
        return groupAdmins;
    }

    public void setGroupAdmins(Set<User> groupAdmins) {
        this.groupAdmins = groupAdmins;
    }

    public Set<Post> getGroupPosts() {
        return groupPosts;
    }

    public void setGroupPosts(Set<Post> groupPosts) {
        this.groupPosts = groupPosts;
    }
}

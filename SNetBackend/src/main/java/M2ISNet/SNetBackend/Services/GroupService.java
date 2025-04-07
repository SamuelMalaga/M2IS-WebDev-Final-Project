package M2ISNet.SNetBackend.Services;


import M2ISNet.SNetBackend.Models.Group;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.Repositories.GroupRepository;
import M2ISNet.SNetBackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    public Group createGroup(
        Long _creatorId,
        String _groupName
    ){
        Group group = new Group();
        User creator = userRepository.findById(_creatorId).get();
        Set<User> adminAndMembers = new HashSet<>();

        //Add the creator to both admins and participants
        adminAndMembers.add(creator);
        group.setGroupMembers(adminAndMembers);
        group.setGroupAdmins(adminAndMembers);

        group.setGroupCreatorId(_creatorId);
        group.setGroupName(_groupName);

        return groupRepository.save(group);
    }

    public void addGroupMember(
            Long _groupId,
            User _memberToAdd
    ){
        Optional<Group> foundGroup = groupRepository.findById(_groupId);
        Set<User> groupMembers = foundGroup.get().getGroupMembers();
        groupMembers.add(_memberToAdd);
        foundGroup.get().setGroupMembers(groupMembers);
    }

    public void addGroupAdmin(
            Long _groupId,
            User _memberToAdd
    ){
        Optional<Group> foundGroup = groupRepository.findById(_groupId);
        Set<User> groupAdmins = foundGroup.get().getGroupAdmins();
        groupAdmins.add(_memberToAdd);
        foundGroup.get().setGroupMembers(groupAdmins);
    }

    public void removeGroupMember(
            Long _groupId,
            User _memberToRemove
    ){
        Optional<Group> foundGroup = groupRepository.findById(_groupId);
        Set<User> groupMembers = foundGroup.get().getGroupMembers();
        groupMembers.remove(_memberToRemove);
        foundGroup.get().setGroupMembers(groupMembers);
    }

    public void removeGroupAdmin(
            Long _groupId,
            User _adminToRemove
    ){
        Optional<Group> foundGroup = groupRepository.findById(_groupId);
        Set<User> groupMembers = foundGroup.get().getGroupAdmins();
        groupMembers.remove(_adminToRemove);
        foundGroup.get().setGroupMembers(groupMembers);
    }

}

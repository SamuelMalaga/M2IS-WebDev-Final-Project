package M2ISNet.SNetBackend.Services;


import M2ISNet.SNetBackend.Models.Post;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.Repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(
            User author,
            String _postContent
    ){
        Post createdPost = new Post();

        createdPost.setPostAuthor(author);
        createdPost.setPostContent(_postContent);

        return postRepository.save(createdPost);
    }

    public void deletePost(
            Long _postId
    ){
        postRepository.deleteById(_postId);
    }

    public Post editPost(
            Long _postId,
            String _newContent
    ){
        Optional<Post> foundPost = postRepository.findById(_postId);
        foundPost.get().setPostContent(_newContent);
        return foundPost.get();
    }


}

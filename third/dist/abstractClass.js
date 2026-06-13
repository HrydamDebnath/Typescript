"use strict";

class CreatePost {
    constructor(postType, theme) {
        this.postType = postType;
        this.theme = theme;
    }

    getPostDuration() {
        // some complex calculation
        return 10;
    }
}

class LinkedInPost extends CreatePost {
    constructor(postType, theme, likes) {
        super(postType, theme);

        this.postType = postType;
        this.theme = theme;
        this.likes = likes;
    }

    getProfessionalTheme() {
        console.log("Professional");
    }
}

const hrydamPost = new LinkedInPost(
    "Career Update",
    "Technology",
    100
);

hrydamPost.getPostDuration();

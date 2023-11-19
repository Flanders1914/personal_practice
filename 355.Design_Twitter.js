/*
355. Design Twitter
思路:这道题有一个隐藏条件
就是 tweet要保证按时间顺序选择，无论是谁post的
所以每一个tweet都要加一个time的标记，用于确定发tweet的顺序
*/
User = function(userId) {
    this.id = userId;
    this.follow = new Set();
    this.followed = new Set();
    this.news = [];
    this.post_set = new Set();
    this.posts = [];
}
Tweet = function(tweetId, time) {
    this.id = tweetId;
    this.time = time;
}

var Twitter = function() {
    this.users = new Map();
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.users.has(userId)) this.users.set(userId, new User(userId));
    let current = this.users.get(userId);

    let tweet = new Tweet(tweetId, this.time);
    this.time++;

    current.news.push(tweet);
    current.posts.push(tweet);
    current.post_set.add(tweetId);
    for (let user of current.followed) {
        user.news.push(tweet);
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.users.has(userId)) return [];
    let current = this.users.get(userId);

    let count = 0;
    let res = [];
    for (let i = current.news.length-1; i >= 0; i--) {
        res.push(current.news[i].id);
        count++;
        if (count == 10) break;
    }
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    let follower, followee;
    if (!this.users.has(followerId)) this.users.set(followerId, new User(followerId));
    follower = this.users.get(followerId);
    if (!this.users.has(followeeId)) this.users.set(followeeId, new User(followeeId));
    followee = this.users.get(followeeId);

    if (follower.follow.has(followee)) return;
    follower.follow.add(followee);
    followee.followed.add(follower);
    for (let i = 0; i <= followee.posts.length-1; i++) {
        follower.news.push(followee.posts[i]);
    }
    follower.news.sort((a,b) => a.time - b.time);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let follower = this.users.get(followerId);
    let followee = this.users.get(followeeId);
    if (!(followee && follower)) return;
    if (!follower.follow.has(followee)) return;

    follower.follow.delete(followee);
    followee.followed.delete(follower);
    let newsLeft = [];
    for (let post of follower.news) {
        if (followee.post_set.has(post.id)) continue;
        newsLeft.push(post);
    }
    follower.news = newsLeft;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
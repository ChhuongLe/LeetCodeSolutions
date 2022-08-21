
var Twitter = function() {
    // need to keep track of tweets that a user has posted and the time it was posted
    // User1 : [[tweet1, 1], [tweet3, 3]]
    this.userMap = new Map();
    
    // keeps track of the user and those that follow them
    // followerId: Set {followee1, followee2, ...}
    this.followerMap = new Map();
    
    // timeStamp of when the tweet occured
    this.ts = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */

// save the timestamp and tweetId to the userId key
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.ts++;
    if(!this.userMap.has(userId)) this.userMap.set(userId, []);
    
    this.userMap.get(userId).push([tweetId, this.ts]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */

// only return the 10 most recent tweets (including theirs and those that they follow) according to the given userId
Twitter.prototype.getNewsFeed = function(userId) {
    // grab the current user's tweets
    let res = this.userMap.get(userId) || []
    // grab all the users that this user follows
    let followings = this.followerMap.get(userId) || [] // get all the users that the current user follows
    
    // collect all the tweets from users that the current user follows
    for (const tweets of followings) {
        res = res.concat(this.userMap.get(tweets) || [])
    }
    console.log(res);
    // sort the tweets according to timestamp
    res.sort((a,b) => b[1] - a[1]);
    
    // return the top 10 after being sorted
    return res.slice(0, 10).map(el => el[0]);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */

// add followeeId to the set in the followerMap
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followerMap.has(followerId)) this.followerMap.set(followerId, new Set());
    
    this.followerMap.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */

// find the user that the current user wishes to unfollow
// remove them from the set in the followerMap
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followerMap.has(followerId)) this.followerMap.get(followerId).delete(followeeId); //
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
# Phase 2: Basic artist interaction

## Models

## Follow model
  - validations:  user_id, followed_id, PRESENCE, UNIQUENESS
  - associations: BELONGS_TO user, followed

## User model
  - associations: HAS_MANY follows, followings
  HAS_MANY followers THROUGH followings
  HAS_MANY followed_artists THROUGH follows


## Controllers

### follows controller
  - routes:       create [under user]
                  index (artists that a user follows), show (other users that follow a user), destroy

### users controller
  - routes:       show (add INCLUDES (follows, followers, followings, followed_artists))
                  index (for search function, request includes query-string)

### songs controller
  - routes:       update (add each play to play count)
                  show (add play count)


## Views
  - users/show.json.jbuilder (add follow/follower data)
  - songs/show.json.jbuilder (add num_plays data)

  - signed-in root page: '/songs' (feed of currently followed artists' music)

## React / Flux

### Components  
  - feed
  - followButton
  - follower
  - followFeed
  - searchBar

### Stores      
  - follow_store

### Constants     
  - follow_constants

### Actions        
  - follow_actions
    - createFollow(artist_id)
    - destroyFollow(follow_id)
    - fetchFollows (for 'Following' tab)
    - fetchFollowers (for 'Followers' tab)
  - api_actions
    - receiveFollows (for 'Following' tab)
    - receiveFollowers (for 'Followers' tab)

### Utils         
  - api_utils
    - createFollow(artist_id)
    - destroyFollow(follow_id)
    - fetchFollows
    - fetchFollowers
    - fetchSongFeed

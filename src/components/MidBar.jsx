import  { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ModeIcon from "@mui/icons-material/Mode";

export default function FormDialog() {
  const [open, setOpen] = useState(false); // State to control the dialog open/close
  const [tweet, setTweet] = useState(""); // State to hold the current tweet text
  const [tweets, setTweets] = useState([]); // State to hold all tweets
  const [comments, setComments] = useState({}); // State to hold comments for each tweet
  const [likes, setLikes] = useState({}); // State to hold like status for each tweet
  const [editTweetId, setEditTweetId] = useState(null);
  const username = 'John Doe';

  const MAX_TWEET_LENGTH = 280;

  // Handler to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
    setTweet("");
    setEditTweetId(null);
  };

  // Handler to close the dialog
  const handleClose = () => {
    setOpen(false);
    setEditTweetId(null);
  };

  // Handler to submit a new tweet
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTweet = tweet.trim();
    if (trimmedTweet && trimmedTweet.length <= MAX_TWEET_LENGTH) {
      if (editTweetId) {
        setTweets((prevTweets) =>
          prevTweets.map((t) =>
            t.id === editTweetId ? { ...t, text: trimmedTweet } : t)
        );
      }

      else {
        const newTweet = { text: trimmedTweet, id: Date.now(), username };
        setTweets([newTweet, ...tweets]);
      }
   
      setTweet("");
      handleClose();
      setEditTweetId(null);
    }
  };

  // Handler to toggle the like status of a tweet
  const likeHandler = (tweetId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [tweetId]: !prevLikes[tweetId],
    }));
  };

  // Handler to add a comment to a tweet
  const addCommentHandler = (tweetId, comment) => {
    const trimmedComment = comment.trim();
    if (trimmedComment) {
      setComments((prevComments) => ({
        ...prevComments,
        [tweetId]: [...(prevComments[tweetId] || []), comment],
      }));
    }
  };

  const handleEditTweet = (tweetId, currentText) => {
    setEditTweetId(tweetId);
    setTweet(currentText);
    setOpen(true);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          style={{
            width: 500,
            height: 50,
            marginTop: 12,
            backgroundColor: "#1DA1F2",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

          }}
        >
          What’s happening?
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: handleSubmit,
          }}
        >
          <DialogTitle>Post a Tweet</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="tweet"
              name="compose_msg"
              label="What's happening?"
              type="text"
              fullWidth
              variant="standard"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              inputProps={{ maxLength: MAX_TWEET_LENGTH }}
              helperText={`${tweet.length}/${MAX_TWEET_LENGTH}`
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={tweet.length > MAX_TWEET_LENGTH}>{editTweetId ? 'Update' : 'Tweet'}</Button>
          </DialogActions>
        </Dialog>

        <div style={{ margin: "20px auto", maxWidth: 600 }}>
          {tweets.length > 0 && (
            <div>
              <h3>Your Tweets</h3>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {tweets.map((t) => (

                  <li
                    key={t.id}
                    style={{
                      marginBottom: 20,
                      padding: 15,
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={1}>
                      <Avatar sx={{ bgcolor: "#1DA1F2" }}>
                        {t.username[0].toUpperCase()}
                      </Avatar>
                      <Typography variant="body1" sx={{ ml: 2 }}>
                        {t.username}
                      </Typography>
                    </Box>

                    {/* Tweet text */}
                    <div style={{ marginBottom: 10 }}>{t.text}</div>



                    <div style={{ display: "flex", gap: 15 }}>
                      <Button
                        onClick={() => likeHandler(t.id)}
                        style={{ minWidth: 0 }}
                      >
                        {likes[t.id] ? (
                          <FavoriteIcon color="error" />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                      <Button
                        onClick={() => {
                          const comment = prompt("Enter your comment:");
                          if (comment) {
                            addCommentHandler(t.id, comment);
                          }
                        }}
                        style={{ minWidth: 0 }}
                      >
                        <CommentIcon />
                      </Button>
                      <ModeIcon
                        onClick={() => handleEditTweet(t.id, t.text)}
                        style={{ minWidth: 0 }}
                      >
                        Edit
                      </ModeIcon>
                    </div>
                    {/* Display comments */}
                    {comments[t.id] && comments[t.id].length > 0 && (
                      <List
                        sx={{
                          paddingLeft: 2,
                          mt: 1,
                          backgroundColor: "#f0f0f0",
                          borderRadius: "8px",
                        }}
                      >
                        {comments[t.id].map((comment, idx) => (
                          <ListItem key={idx}>
                            <ListItemText
                              primary={comment}
                              primaryTypographyProps={{ variant: "body2" }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
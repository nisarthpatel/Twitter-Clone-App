
import { Box, Typography, List, ListItem, ListItemText, Avatar, Button } from "@mui/material";

const trends = [
    { topic: "Trending in Technology", hashtag: "#ReactJS", tweets: "25K Tweets" },
    { topic: "Trending in Sports", hashtag: "#USOpen", tweets: "10K Tweets" },
    { topic: "Trending in Entertainment", hashtag: "#DunePartTwo", tweets: "5K Tweets" },
];

const suggestions = [
    { name: "Sundar Pichai", handle: "@sundarpichai", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmd4OVWLewtxHuvp7WErGPBIMHY8CT1Bt5ZD2nE-nf_Gu9cPWm", x: 'https://x.com/sundarpichai' },
    { name: "Bill Gates", handle: "@BillGates", avatar: "https://wallpapers.com/images/featured/bill-gates-jvn5uzk3ldgxok16.jpg", x: 'https://x.com/billgates' },
    { name: "Elon Musk", handle: "@elonmusk", avatar: "https://variety.com/wp-content/uploads/2023/02/Elon-Musk.jpg?w=1000&h=667&crop=1", x: 'https://x.com/elonmusk' },
];

function RightBar() {
    return (
        <Box sx={{ width: "400px", padding: "20px", bgcolor: "#f5f5f5", height: "100vh", borderLeft: '2px solid #ddd' }}>
            {/* Trending Section */}
            <Box sx={{ marginBottom: "30px" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "15px" }}>
                    Trends for you
                </Typography>
                <List>
                    {trends.map((trend, index) => (
                        <ListItem key={index} sx={{ padding: "10px 0" }}>
                            <ListItemText
                                primary={trend.hashtag}
                                secondary={`${trend.topic} - ${trend.tweets}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Who to Follow Section */}
            <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "15px" }}>
                    Who to follow
                </Typography>
                <List>
                    {suggestions.map((suggestion, index) => (
                        <ListItem key={index} sx={{ padding: "10px 0", display: "flex", alignItems: "center" }}>
                            <Avatar alt={suggestion.name} src={suggestion.avatar} />
                            <Box sx={{ marginLeft: "10px" }}>
                                <Typography variant="body1" fontWeight="bold">
                                    {suggestion.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {suggestion.handle}
                                </Typography>
                            </Box>
                            <Button

                                variant="contained"
                                size="small"
                                sx={{ marginLeft: "auto", backgroundColor: "#1DA1F2" }}
                            >
                                <a href={suggestion.x}>Follow</a>
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

export default RightBar;

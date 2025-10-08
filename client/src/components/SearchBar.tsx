import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      placeholder="Search…"
      variant="outlined"
      size="small"
      sx={{
        width: 250,
        borderRadius: "16px", // هنا بنغير الـ border radius
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px", // لازم كمان هنا عشان الـ input نفسه
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
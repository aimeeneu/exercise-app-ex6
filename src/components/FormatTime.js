import "/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/App.css";

// Format time in MM:SS format
export default function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
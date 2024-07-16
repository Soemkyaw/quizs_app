import { ref } from "vue";

// Define a ref for quizzes
let quizzes = ref(null);

// Function to fetch quizzes from the server
let fetchQuizzes = async () => {
  try {
    let response = await fetch("http://localhost:3000/quizzes");
    let data = await response.json();
    quizzes.value = data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
  }
};

// Function to return the quizzes ref and fetchQuizzes function
let getQuizzes = () => {
  return { quizzes, fetchQuizzes };
};

export default getQuizzes;

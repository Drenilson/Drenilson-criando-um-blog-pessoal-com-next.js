import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nzzwjmnxtrdpicvxyjdw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56endqbW54dHJkcGljdnh5amR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTY1MzUsImV4cCI6MjA0NTUzMjUzNX0.GaNME0Du27qnYo4FNlx--OQeA5QxJ300T-K-KUormak",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56endqbW54dHJkcGljdnh5amR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTY1MzUsImV4cCI6MjA0NTUzMjUzNX0.GaNME0Du27qnYo4FNlx--OQeA5QxJ300T-K-KUormak"
       }
})
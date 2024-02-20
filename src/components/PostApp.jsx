import { QueryClientProvider } from "@tanstack/react-query";
import Posts from "./Posts";
import { queryClient } from './queryClient';

const PostApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
};
export default PostApp;

using System;

namespace Forum.Models
{
    public class Post
    {
        public int Id { get; set; }
        public int ThreadId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
    }
}

using System;

namespace Forum.Models
{
    public class PostCreate
    {
        public int ThreadId { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
    }
}

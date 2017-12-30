using System;

namespace Forum.Models
{
    public class ThreadGet
    {
        public string UserName { get; set; }
        public string Title { get; set; }
        public int PostCount { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastPost { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Forum.Controllers
{
    [Route("api/threads")]
    public class ThreadsController : Controller
    {
        private readonly MvcForumContext context;

        public ThreadsController(MvcForumContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Thread>> GetThreads()
        {
            return await context.Threads.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Thread> GetThread(int id)
        {
            return await context
                .Threads
                .Where(t => t.Id == id)
                .FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<IActionResult> CreateThread([FromBody] ThreadCreate threadCreate)
        {
            Thread thread = new Thread
            {
                Content = threadCreate.Content,
                Title = threadCreate.Title,
                UserId = 1,
                DateCreated = DateTime.Now
            };
            context.Threads.Add(thread);
            await context.SaveChangesAsync();

            return Ok(thread.Id);
        }

        [HttpGet("posts/{id}")]
        public async Task<Post> GetPost(int id)
        {
            return await context
                .Posts
                .Where(p => p.Id == id)
                .FirstOrDefaultAsync();
        }

        [HttpGet("{id}/posts")]
        public async Task<IEnumerable<Post>> GetPosts(int id)
        {
            return await context
                .Posts
                .Where(p => p.ThreadId == id)
                .ToListAsync();
        }

        [HttpPost("{id}/posts")]
        public async Task<IActionResult> CreateThread([FromBody] PostCreate postCreate)
        {
            Post post = new Post
            {
                Content = postCreate.Content,
                ThreadId = postCreate.ThreadId,
                UserId = 1,
                DateCreated = DateTime.Now
            };

            context.Posts.Add(post);
            await context.SaveChangesAsync();

            return Ok(post.Id);
        }
    }
}

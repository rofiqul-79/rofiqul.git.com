    function toggleHeight(postId, buttonId) {
      const post = document.getElementById(postId);
      const button = document.getElementById(buttonId);

      // সব পোস্ট কোলাপস করা
      const allPosts = document.querySelectorAll('.post');
      allPosts.forEach(p => {
        if (p !== post && p.classList.contains('expanded')) {
          p.classList.remove('expanded');
        }
      });

      // বাটনকে সংকুচিত করা
      button.classList.add('shrink');

      // 0.2 সেকেন্ড পরে সংকুচিত হওয়া বন্ধ করে, ডিটেলস বক্স এক্সপান্ড বা কোলাপস হলে উচ্চতা ঠিক হবে
      setTimeout(() => {
        button.classList.remove('shrink');
      }, 500);

      // পোস্ট এক্সপান্ড বা কোলাপস করা
      if (post.classList.contains('expanded')) {
        post.classList.remove('expanded');
      } else {
        post.classList.add('expanded');
      }
    }
window.addEventListener('scroll', function() {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
      content.classList.add('show');
    }
  });
});

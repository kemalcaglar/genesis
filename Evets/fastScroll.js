function scolled_300px() {
    let lastScrollAt = Date.now();
    let timeout;
    let scroll_long = 0;
    let first_scroll_top;

    function scrollStartStop() {
        var $this = $(this);
        if (Date.now() - lastScrollAt > 100)
            $this.trigger('scrollstart');
        lastScrollAt = Date.now();
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (Date.now() - lastScrollAt > 99)
                $this.trigger('scrollend');
        }, 100);
    }

    $(document).on('scroll', scrollStartStop);

    $(document).on('scrollstart', function () {
        first_scroll_top = $(document).scrollTop();
    });

    $(document).on('scrollend', function () {
        scroll_long = $(document).scrollTop() - first_scroll_top;
        if (scroll_long>300){
            alert('Scroll 300')
        }
    });

}
scolled_300px()
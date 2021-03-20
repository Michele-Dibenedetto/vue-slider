var app = new Vue({
    el: "#root",
    data: {
        path: "img/",
        extension: ".jpg",
        indexImage: 0,
        image: [
            "image1",
            "image2",
            "image3",
            "image4"
        ],
        play: true
    },
    methods: {
        changenext: function() {
            this.indexImage ++;
            if (this.indexImage > this.image.length - 1)
                this.indexImage = 0;
        },
        changeprev: function() {
            this.indexImage --;
            if (this.indexImage < 0)
                this.indexImage = this.image.length - 1;
        },
        startPlay: function() {
            this.play = false;
            time = setInterval(() => {
                this.changenext();
            }, 3000);
        },
        stopPlay: function() {
            this.play = true;
            clearInterval(time);
        },
        clickCircle: function(indexCircle) {
            this.indexImage = indexCircle;
        }
    }
})

const container = document.querySelector('.container');
window.onload = () => {
    addEventListener('mousemove', (e) => {
        const doc_element = document.documentElement;

        let mouse_x_ratio = (e.layerX / doc_element.clientWidth) * 100,
            bg_x_pos = ((mouse_x_ratio) / 6.75) * -1

        let mouse_y_ratio = (e.layerY / doc_element.clientHeight) * 100,
            bg_y_pos = ((mouse_y_ratio) / 6.25) * -1

        container.style.setProperty('--mouse_x', bg_x_pos)
        container.style.setProperty('--mouse_y', bg_y_pos)
    });
    let checked = true;
    document.querySelector('.hide_btn').addEventListener('click', (e) => {
        if (checked) {
            checked = false;
            document.querySelectorAll('.grid_item').forEach(child => {
                child.style.opacity = '0';
            })
        } else if (!checked) {
            checked = true;
            document.querySelectorAll('.grid_item').forEach(child => {
                child.style.opacity = '1';
            })
        }

    })
    document.querySelector('.next').addEventListener('click', next_img);
    document.querySelector('.prev').addEventListener('click', prev_img);

}

let current_img = 0;
const images = [
    'url(../production/images/bg-image-1.jpg)',
    'url(../production/images/bg-image-2.jpg)',
    'url(../production/images/bg-image-3.jpg)',
    'url(../production/images/bg-image-4.jpg)',
    'url(../production/images/bg-image-5.jpg)'
]

const next_img = () => {
    set_img('next')
}

const prev_img = () => {
    set_img('prev')
}

const set_img = (which) => {
    if (which == 'next') {
        if (current_img < images.length - 1) current_img++;
        else if (current_img == images.length - 1) current_img = 0;
    } else if (which == 'prev') {
        if (current_img > 0) current_img--;
        else if (current_img == 0) current_img = images.length - 1;
    }

    container.style.backgroundImage = images[current_img];
}

set_img()
export default function createTags(list = []) {
    let tags = "";

    list.forEach((item) => (tags += `<span>${item}</span>`));

    return tags;
}
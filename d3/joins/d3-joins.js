(async () => {
    const width = '300';

    const svg = d3.select('body')
        .append('svg')
        .attr("width", width)
        .attr("height", 33)
        .attr("viewBox", `0 -20 ${width} 33`)

    const wait = async (time) => await new Promise((r) => setTimeout(r, time));

    const randomLetters = () => {
        return d3.shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
            .slice(0, Math.floor(6 + Math.random() * 20))
            .sort();
    }

    while (true) {
        const t = svg.transition()
            .duration(750);
    
        svg.selectAll("text")
            .data(randomLetters(), d => d)
            .join(
                enter => enter.append("text")
                    .attr("fill", "green")
                    .attr("x", (d, i) => i * 16)
                    .attr("y", -30)
                    .text(d => d)
                    .call(enter => enter.transition(t)
                        .attr("y", 0)),
                update => update
                    .attr("fill", "black")
                    .attr("y", 0)
                    .call(update => update.transition(t)
                        .attr("x", (d, i) => i * 16)),
                exit => exit
                    .attr("fill", "brown")
                    .call(exit => exit.transition(t)
                        .attr("y", 30)
                        .remove())
            );

        svg.node();
        await wait(2500);
    }

})()
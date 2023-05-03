const tooltips = document.querySelectorAll(".tooltip")
let n = "";

tooltips.forEach((tooltip) =>
{
    tooltip.addEventListener('mouseover', onTooltipHover);
    tooltip.addEventListener('mouseleave', onTooltipLeave);

}
)

function onTooltipHover (evt)
{
    evt.currentTarget.classList.add('tooltip-animated' + n);
}
function onTooltipLeave (evt)
{
    evt.currentTarget.classList.remove('tooltip-animated' + n);
}
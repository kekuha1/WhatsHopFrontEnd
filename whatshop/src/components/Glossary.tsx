import React, { Component } from 'react';

// This would be imported by the header Component.
export default function Glossary() {
    return(
        <form className='glossary'>
            <h1>Types of Breweries</h1>
            <h3>Bar</h3>
            <p>Kinda self-explanatory.  This is a restaurant/pub/etc. that serves beer without a brewery on site.</p>
            <h3>Brewpub</h3>
            <p>We're stepping up here.  This is a kind of restaurant/bar/pub/etc. that also has it's own brewery at the location.  Sometimes it will sell it's beer offsite</p>
            <h3>Nano</h3>
            <p>Size doesn't matter but sales helps!  These are the smallest breweries around and usually serve local areas.</p>
            <h3>Micro</h3>
            <p>A step up from the nano breweries.  These are more established and sell up to 15,000 barrels' worth of beer a year. (Example: Samuel Adams)</p>
            <h3>Regional</h3>
            <p>Taking a leap forward in sales, regional breweries sell from 15,000 up to 6,000,000 barrels a year.</p>
            <h3>Large</h3>
            <p>Now we're in the big leagues, selling more than 6,000,000 million barrels a year.  Major names like Budweiser make up these breweries.  Though, don't expect them to be open for visitors.</p>
            <h3>Contract</h3>
            <p>These breweries are distinguished by the fact that they use equipment from other breweries.  Should be good brew nonetheless!</p>
            <h3>Proprietor</h3>
            <p>Similar to contracting breweries but they share the same equipment and are more of an incubator.</p>
            <h3>Planning</h3>
            <p>Under Construction!  These breweries are in the works and not yet open to the public.</p>
            <h3>Closed</h3>
            <p>*Sad Face* These breweries have passed on over the rainbow bridge.  May their craft brews rest in peace.</p>
        </form>
    )
}
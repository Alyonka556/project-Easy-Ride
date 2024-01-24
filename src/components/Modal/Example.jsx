<Backdrop onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
  <article>
    <StyledImg src={img} width={320} alt={make}>
      <img src={img ? img : photoLink} alt="car" />
    </StyledImg>
    <StyledDescriptionWrapper>
      <h2>
        {make} <StyledColorSpan>{model}</StyledColorSpan>, {year}
      </h2>
      <ul>
        <li>
          {position[1]} | {position[2]} |
        </li>
        <li> Id: {id} | </li>
        <li> Year: {year} | </li>
        <li> Type: {type} | </li>
        <li> Fuel Consumption: {fuelConsumption} | </li>
        <li> Engine Size: {engineSize} </li>
      </ul>
      <StyledDescription>{description}</StyledDescription>
      <StyledUlAccessories>
        Accessories and functionalities: <br />
        {accessories.map((item, index) => (
          <li key={index}>&nbsp;{item} |</li>
        ))}
        {functionalities.map((item, index) => (
          <li key={index}>
            &nbsp;{item} {index !== functionalities.length - 1 && '|'}
          </li>
        ))}
      </StyledUlAccessories>

      <StyledUlConditions>
        Rental Conditions: <br />
        {arrOfRentalConditions.map((item, index) => (
          <li key={index}>
            {item
              .split(/(\d+)/)
              .map((segment, segmentIndex) =>
                isNaN(Number(segment)) ? (
                  <span key={segmentIndex}>{segment}</span>
                ) : (
                  <StyledAccentSpan key={segmentIndex}>
                    {segment}
                  </StyledAccentSpan>
                )
              )}
          </li>
        ))}
      </StyledUlConditions>
      <StyledLink href="tel:+380730000000">Rental car</StyledLink>
    </StyledDescriptionWrapper>
    <StyledCloseButton onClick={closeModal} type="button">
      <IoMdClose size="20" />
    </StyledCloseButton>
  </article>
</Backdrop>;

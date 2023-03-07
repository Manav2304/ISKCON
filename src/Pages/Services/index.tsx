import React, { useState, useRef, useEffect } from 'react';
import { Container, Header, ServicesList, ServiceItem, ServiceImage, ServiceName, ServiceDetails, ServiceDescription, SelectedServiceImage } from './style';
import { services, Service } from './constant';

const ServicesPage: React.FC = () => {
const [selectedService, setSelectedService] = useState<Service | null>(null);
const serviceDetailsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
if (selectedService && serviceDetailsRef.current) {
window.scrollTo({
top: serviceDetailsRef.current.offsetTop,
behavior: 'smooth'
});
}
}, [selectedService]);

const handleServiceSelect = (service: Service) => {
setSelectedService(service);
};

return (
<Container>
<Header>Our Services</Header>
<ServicesList>
{services.map(service => (
<ServiceItem key={service.name} onClick={() => handleServiceSelect(service)}>
<ServiceName>{service.name}</ServiceName>
</ServiceItem>
))}
</ServicesList>
{selectedService && (
<div ref={serviceDetailsRef}>
<ServiceDetails>
<ServiceName>{selectedService.name}</ServiceName>
<SelectedServiceImage src={selectedService.image} />
<ServiceDescription>{selectedService.description}</ServiceDescription>
<ServiceDescription>{selectedService.description2}</ServiceDescription>
<ServiceDescription>{selectedService.description3}</ServiceDescription>
<ServiceDescription>{selectedService.description4}</ServiceDescription>
<ServiceDescription>{selectedService.description5}</ServiceDescription>
<ServiceDescription>{selectedService.description6}</ServiceDescription>
<ServiceDescription>{selectedService.description7}</ServiceDescription>
<ServiceDescription>{selectedService.description8}</ServiceDescription>
</ServiceDetails>
</div>
)}
</Container>
);
};

export default ServicesPage;
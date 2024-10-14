import useTabs from "./useTabs";
import { TabHeader, Icon } from "..";
import logo from "../../assets/img/logo.png";
import { __ } from '@wordpress/i18n';

const Tab = ({ tabsData, onChange, activeTabTitle }) => {
	const { renderTabs, renderContent } = useTabs(tabsData, 0, onChange);

	const GetPro = () => {
		return (
			<>
				<div className="get-pro">
					<img src={logo} alt={__('Logo', 'blossom-spa')} />
					<h3>{__('Blossom Spa Pro', 'blossom-spa')}</h3>
					<p>{__('Get access to all unlimited features.', 'blossom-spa')}</p>
					<a className="cw-button-btn primary-btn" target="_blank" href={cw_dashboard.get_pro}>{__('Get Pro', 'blossom-spa')}</a>
				</div>
			</>
		);
	}

	return (
		<div className="cw-tabs-container">
			<div className="cw-tabs">
				<div className="wrapper">
					<div className="top">
						<div className="logo">
							<img src={logo} alt={__('Logo', 'blossom-spa')} />
							<h2>{cw_dashboard.blog_name}</h2>
						</div>
						<div className="cw-tabs-button">
							{renderTabs()}
						</div>
					</div>
					{GetPro()}
				</div>

			</div>
			<div className="wrapper">
				<TabHeader title={activeTabTitle} />
				<div className="cw-tabs-content">
					{renderContent()}
				</div>
			</div>


		</div>
	);
};

export default Tab;
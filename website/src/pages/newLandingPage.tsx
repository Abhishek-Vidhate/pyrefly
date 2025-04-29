/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import Layout from '@theme/Layout';
import PerformanceComparisonChartSection from '../components/landing-page/PerformanceComparisonChartSection';
import QuotesGrid from '../components/landing-page/quotesGrid';
import WhyPyrefly from '../components/landing-page/whyPyrefly';
import LandingPageSection from '../components/landing-page/landingPageSection';
import LandingPageHeader from '../components/landing-page/landingPageHeader';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NewLandingPage(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext();
    // TODO: update content and improve css
    return (
        <Layout
            id="new-landing-page"
            title="Pyrefly: A Static Type Checker for Python"
            description={siteConfig.description}
        >
            <LandingPageHeader />
            <LandingPageSection
                id="why-pyrefly-section"
                child={<WhyPyrefly />}
                isFirstSection={true}
                hasBrownBackground={true}
            />
            <LandingPageSection
                id="performance-comparison-section"
                title="Performance Comparison"
                child={<PerformanceComparisonChartSection />}
                hasBrownBackground={true}
            />
            <LandingPageSection
                id="quotes-section"
                title="Don't just take our word for it"
                child={<QuotesGrid />}
                isLastSection={true}
                hasBrownBackground={true}
            />
        </Layout>
    );
}

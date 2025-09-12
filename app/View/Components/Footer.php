<?php

namespace App\View\Components;

use App\Models\FooterComponent;
use Illuminate\View\Component;

class Footer extends Component
{
    public $id;
    public $templateId;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($componentId, $templateId)
    {
        $this->id = $componentId;
        $this->templateId = $templateId;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $component = FooterComponent::find($this->id);
        $content = $component->data['content'];
        $mediaBackgroundImage = $component->getMedia('background_image_one_template_footer_components')->first();
        if ($mediaBackgroundImage)
            $content['background_image'] = $mediaBackgroundImage->getUrl();
        else $content['background_image'] = null;
        $mediaLogo = $component->getMedia('logo_one_template_footer_components')->first();
        if ($mediaLogo)
            $content['logo'] = $mediaLogo->getUrl();
        else $content['logo'] = null;
        $mediaOneSocialNetwork = $component->getMedia('one_social_network_logo_one_template_footer_components')->first();
        if ($mediaOneSocialNetwork)
            $content['one_social_network_logo'] = $mediaOneSocialNetwork->getUrl();
        else $content['one_social_network_logo'] = null;
        $mediaTwoSocialNetwork = $component->getMedia('two_social_network_logo_one_template_footer_components')->first();
        if ($mediaTwoSocialNetwork)
            $content['two_social_network_logo'] = $mediaTwoSocialNetwork->getUrl();
        else $content['two_social_network_logo'] = null;
        $mediaThreeSocialNetwork = $component->getMedia('three_social_network_logo_one_template_footer_components')->first();
        if ($mediaThreeSocialNetwork)
            $content['three_social_network_logo'] = $mediaThreeSocialNetwork->getUrl();
        else $content['three_social_network_logo'] = null;
        $mediaFourSocialNetwork = $component->getMedia('four_social_network_logo_one_template_footer_components')->first();
        if ($mediaFourSocialNetwork)
            $content['four_social_network_logo'] = $mediaFourSocialNetwork->getUrl();
        else $content['four_social_network_logo'] = null;
        $mediaFiveSocialNetwork = $component->getMedia('five_social_network_logo_one_template_footer_components')->first();
        if ($mediaFiveSocialNetwork)
            $content['five_social_network_logo'] = $mediaFiveSocialNetwork->getUrl();
        else $content['five_social_network_logo'] = null;
        return view('components.footer.'.$component->data['templateName'], ['content' => $content ]);
    }
}
